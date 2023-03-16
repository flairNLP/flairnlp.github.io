import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_file_analysis_8k9b.svg').default,
    description: (
      <>
        Just a few lines of code to tag your text! Find entities (→ demo), detect sentiment (→ demo), and more.
      </>
    ),
  },
  {
    title: 'State-of-the-art',
    Svg: require('@site/static/img/undraw_alien_science_re_0f8q.svg').default,
    description: (
      <>
        Our models give state-of-the-art accuracy and are constantly improved upon. 
      </>
    ),
  },
  {
    title: 'Free!',
    Svg: require('@site/static/img/undraw_fun_moments_2vha.svg').default,
    description: (
      <>
        Flair is completely free and open source.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
