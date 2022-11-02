const res = await useFetch('GET', '/user/2');
    const res1 = await useFetch('GET', '/user/1/articles');
    const res2 = await useFetch('GET', '/user/1/comments');
    const res3 = await useFetch('GET', '/user/me/articles');
    const res4 = await useFetch('GET', '/user/me/comments');
    const res5 = await useFetch('GET', '/article/1');
    const res6 = await useFetch('GET', '/articles');
    const res7 = await useFetch('POST', '/article', {
      title: 'title',
      content: 'content..',
    });
    const res8 = await useFetch('PATCH', '/article/1', {
      title: 'tllll',
      content: 'dsfsdt..',
    });
    const res9 = await useFetch('DELETE', '/article/1');
    const res10 = await useFetch('GET', '/article/1/like');
    const res11 = await useFetch('GET', '/article/1/dislike');
    const res12 = await useFetch('POST', '/comment/1', {
      content: '댓글post하기',
    });
    const res13 = await useFetch('PATCH', '/comment/1', {
      content: '댓글pATch하기',
    });
    const res14 = await useFetch('DELETE', '/comment/1');
    const res15 = await useFetch('GET', '/comment/1/like');
    const res16 = await useFetch('GET', '/comment/1/dislike');
    console.log('회원정보 조희 : ', res);
    console.log('user-id로 회원 전체 글 조회 : ', res1);
    console.log('user-id로 회원 전체 댓글 조회 : ', res2);
    console.log('회원 본인이 작성한 전체 글 조회 : ', res3);
    console.log('회원 본인이 작성한 전체 댓글 조회 : ', res4);
    console.log('글 한개 가져오기 : ', res5);
    console.log('전체 글 가져오기 : ', res6);
    console.log('글 작성 : ', res7);
    console.log('글 수정 : ', res8);
    console.log('글 삭제 : ', res9);
    console.log('질문 좋아요 투표 : ', res10);
    console.log('질문 싫어요 투표 : ', res11);
    console.log('답변 작성 : ', res12);
    console.log('답변 수정 : ', res13);
    console.log('답변 삭제 : ', res14);
    console.log('답변 좋아요 투표 : ', res15);
    console.log('답변 싫어요 투표 : ', res16);