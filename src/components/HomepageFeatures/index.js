import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_proud_coder_re_exuy.svg').default,
    description: (
      <>
        State-of-the-art NLP with just a few lines of code! Find entities, detect sentiment, and more → <a href="demo">check out our demo</a>!
      </>
    ),
  },
  {
    title: 'Huge Community',
    Svg: require('@site/static/img/undraw_social_friends_re_7uaa.svg').default,
    description: (
      <>
        With a community of ~200 code contributors, Flair is used in hundreds of companies, over <a href="https://github.com/flairNLP/flair/network/dependents">2,000 open source projects</a> , and over 2,000 research papers!
      </>
    ),
  },
  {
    title: 'Open Source and Free',
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
