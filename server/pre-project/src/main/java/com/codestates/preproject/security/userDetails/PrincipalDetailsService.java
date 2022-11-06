package com.codestates.preproject.security.userDetails;

import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.security.jwt.JwtTokenizer;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import com.codestates.preproject.utils.CustomAuthorityUtils;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public final class PrincipalDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils;
    private final JwtTokenizer jwtTokenizer;

    public PrincipalDetailsService(UserRepository userRepository, CustomAuthorityUtils authorityUtils, JwtTokenizer jwtTokenizer) {
        this.userRepository = userRepository;
        this.authorityUtils = authorityUtils;
        this.jwtTokenizer = jwtTokenizer;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUser = userRepository.findByEmail(username);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return new PrincipalDetails(findUser);
    }

    public Map<String, String> refresh(String refreshToken) {

        // Refresh Token 유효성 검사
        Jws<Claims> claimsJws = jwtTokenizer.getClaims(refreshToken, jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey()));

        String email = claimsJws.getBody().getSubject();
        User user = userRepository.findByEmail(email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        if (!user.getRefreshToken().equals(refreshToken)) {
            throw new JwtException("유효하지 않은 Refresh Token 입니다.");
        }

        Map<String, Object> claims = new HashMap<>();
        claims.put("username", user.getEmail());
        claims.put("roles", user.getRoles());

        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);
        Map<String, String> resultTokens = new HashMap<>();
        resultTokens.put("Authorization", "Bearer " + accessToken);
        resultTokens.put("Refresh", refreshToken);
        return resultTokens;
    }

    public void updateRefreshToken(String email, String refreshToken) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        user.updateRefreshToken(refreshToken);

        userRepository.save(user);
    }

    public final class PrincipalDetails extends User implements UserDetails {
        public PrincipalDetails(User user) {
            setUserId(user.getUserId());
            setEmail(user.getEmail());
            setNickname(user.getNickname());
            setPassword(user.getPassword());
            setRoles(user.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
