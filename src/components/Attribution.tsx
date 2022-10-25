const styles = {
  wrapper: "text-xs text-center absolute bottom-4 text-gray-500",
  link: "text-purple-400",
};

export function Attribution() {
  return (
    <div className={styles.wrapper}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className={styles.link}
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="#" className={styles.link}>
        Berkay Urun
      </a>
      .
    </div>
  );
}
