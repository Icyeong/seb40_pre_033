package com.codestates.preproject.security;

import com.codestates.preproject.security.handler.UserAuthenticationEntryPoint;
import com.codestates.preproject.security.handler.UserAuthenticationFailureHandler;
import com.codestates.preproject.security.handler.UserAuthenticationSucessHandler;
import com.codestates.preproject.security.handler.UserDeniedHandler;
import com.codestates.preproject.security.jwt.JwtAuthenticationFilter;
import com.codestates.preproject.security.jwt.JwtTokenizer;
import com.codestates.preproject.security.jwt.JwtVerificationFilter;
import com.codestates.preproject.security.userDetails.PrincipalDetailsService;
import com.codestates.preproject.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.firewall.DefaultHttpFirewall;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class SecurityConfig{
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final UserAuthenticationSucessHandler userAuthenticationSucessHandler;
    private final UserAuthenticationFailureHandler userAuthenticationFailureHandler;
    private final PrincipalDetailsService principalDetailsService;

    public SecurityConfig(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils, UserAuthenticationSucessHandler userAuthenticationSucessHandler, UserAuthenticationFailureHandler userAuthenticationFailureHandler, PrincipalDetailsService principalDetailsService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.userAuthenticationSucessHandler = userAuthenticationSucessHandler;
        this.userAuthenticationFailureHandler = userAuthenticationFailureHandler;
        this.principalDetailsService = principalDetailsService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws  Exception {
        http
                .headers().frameOptions().sameOrigin() // ?????? ????????? ???????????? request??? ????????? ????????? ?????? H2 ??? ????????? ??????????????? ???????????? ??????
                .and()
                .csrf().disable() // no cookie no CSRF
                .cors(Customizer.withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserDeniedHandler())
                .and()
                .apply(new JwtFilterConfigurer()) // Custom Configurer ????????? ??????
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll());

        return http.build();
    }

    // JwtAuthenticationFilter ??????
    // AbstractHttpConfigurer??? AbstractHttpConfigurer ???????????? ????????? HttpSecurityBuilder??? ???????????? ????????? ????????? ?????? ??????
    public class JwtFilterConfigurer extends AbstractHttpConfigurer<JwtFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class); // getSharedObject??? ?????? ????????? ???????????? ????????? ???????????? SecurityConfigurer ?????? ?????? ?????? ?????? ??? ??????
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, principalDetailsService);
            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(userAuthenticationSucessHandler);
            jwtAuthenticationFilter.setAuthenticationFailureHandler(userAuthenticationFailureHandler);

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
            // ????????? ???????????? ?????? ????????? ??????
            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*", "http://localhost:3000"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    public HttpFirewall httpFirewall() {
        return new DefaultHttpFirewall();
    }

}
