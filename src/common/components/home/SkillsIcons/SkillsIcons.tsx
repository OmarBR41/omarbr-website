import React from 'react';

import Image from 'next/image';

import styles from './SkillsIcons.module.css';

const SKILLS = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'NextJS',
  'Docker',
  'PostgreSQL',
  'Figma',
];

const Skill = ({ id }: { id: string }) => {
  const idLowercase = id.toLowerCase();
  const imageSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${idLowercase}/${idLowercase}-original.svg`;

  return (
    <div className={styles.icon}>
      {/* The NextJS logo needs a white bg to show properly bc of Hero bg */}
      {id === 'NextJS' && <div className={styles.whiteCircleBackground} />}

      <Image alt={id} fill src={imageSrc} title={id} />
    </div>
  );
};

export const SkillsIcons = () => {
  const renderIcons = () => SKILLS.map((skill) => <Skill id={skill} key={skill} />);

  return <div className={styles.container}>{renderIcons()}</div>;
};
