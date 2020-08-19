import React from 'react';
import Newscard from '../NewsCard/NewsCard';
import { Typography, Grid, Grow } from '@material-ui/core';
import useStyles from './styles';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  {
    color: '#1565c0',
    title: 'News by Categories',
    info:
      'Bussiness, Entertainment, Genetal, Health, Science, Sports, Technology',
    text: 'Give me the latest Techmology news',
  },
  {
    color: '#4527a0',
    title: 'News by Terms',
    info: 'Bitcoin, Playstation 5, Smartphones, Donald Trump ....',
    text: "What's up with Playstation 5 ",
  },
  {
    color: '#283593',
    title: 'News by Source',
    info: 'BCC News, CNN, Wired, Time, IGN, ABC News, Buzzfeed ....',
    text: 'Give me the news from CNN',
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant='h5' component='h5'>
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant='h6' component='h6'>
                    <strong>{infoCard.title.split(' ')[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant='h6' component='h6'>
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={3}
      >
        {articles.map((article, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: 'flex' }}
          >
            <Newscard
              article={article}
              i={index}
              activeArticle={activeArticle}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};
export default NewsCards;
