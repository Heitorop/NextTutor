import Image from "next/image";
import styles from "./page.module.css";
import course from "./course.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        {course.lessons.map((item) => {
          return (
            <li key={item.name}>
              <h2>{item.title}</h2>
              <ol>
                {item.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
