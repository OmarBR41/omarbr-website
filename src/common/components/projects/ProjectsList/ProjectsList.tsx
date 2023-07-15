import React, { useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { type Project, PROJECTS } from '@/lib/constants/projects';
import { shuffleArray } from '@/lib/utils';

import { ProjectCard } from '../ProjectCard';

import styles from './ProjectsList.module.css';

const LIMIT = 6;

interface ProjectsListProps {
  filterBy?: (project: Project) => unknown;
  qty?: number;
}

const ProjectsList = ({ qty, filterBy }: ProjectsListProps) => {
  const { t } = useTranslation('projects');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    let _projects = PROJECTS;
    _projects = shuffleArray(_projects);

    if (filterBy) {
      _projects = _projects.filter((project) => filterBy(project));
    }

    if (qty) {
      _projects = _projects.slice(0, qty);
    }

    setFilteredProjects(_projects);
  }, [filterBy, qty]);

  return (
    <div className={styles.gridContainer}>
      {filteredProjects.map((project: Project) => (
        <ProjectCard
          key={project.id}
          title={t(`${project.id}.subtitle`)}
          description={t(`${project.id}.description`)}
          {...project}
        />
      ))}
    </div>
  );
};

ProjectsList.defaultProps = {
  filterBy: undefined,
  qty: LIMIT,
};

export { ProjectsList };
