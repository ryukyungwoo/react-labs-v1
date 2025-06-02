interface User {
  nickname?: string;
}

export default function Welcome({ nickname }: User) {
  if (!nickname) {
    return (
      <div>
        <p>방문자님, 환영합니다!</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>환영합니다, {nickname}님!</p>
      </div>
    );
  }
}
