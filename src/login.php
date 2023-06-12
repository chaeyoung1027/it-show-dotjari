<?php
// 로그인 요청 처리
$email = $_POST['email'];
$password = $_POST['password'];

// 이메일과 비밀번호 검증 로직 구현
// ...

// 응답 반환
if ($loginSuccess) {
  $response = array('message' => '로그인 성공');
} else {
  $response = array('message' => '로그인 실패');
}

echo json_encode($response);
echo '<script>alert(' . json_encode($response) . ');</script>';
?>
