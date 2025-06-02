import styles from "./Greeting.module.css";

interface User {
  name: string;
  age?: number;
}
// props = 객체
export default function Greeting({ name, age }: User) {
  // 조건부 랜더링

  // 1) if 방식

  //   if (!age) {
  //     return;
  //     <p>안녕하세요! {name}</p>;
  //   } else {
  //     return (
  //       <p>
  //         안녕하세요! {name}({age})
  //       </p>
  //     );
  //   }

  // 2) 삼항연산자

  //   return (
  //     <p>
  //       안녕하세요! {name}
  //       {age !== undefined ? `(${age})` : ""}
  //     </p>
  //   );

  // 3) && 연산자 (AND)
  // true && true -> true
  // false && (???) -> false
  return (
    <p className={styles.hello}>
      안녕하세요! {name}
      {age !== undefined && `(${age})`}
    </p>
  );
}
