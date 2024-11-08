import * as React from 'react';
import { Avatar } from './Avatar';
import { TestImages } from '@fluentui/example-data';
import { CallRegular, MailRegular, LocationRegular } from '@fluentui/react-icons';
import { makeStyles, tokens, mergeClasses, Subtitle1, Subtitle2, Text, Link } from '@fluentui/react-components';

import './departmentview.css';

export interface DepartmentViewProps {
  layout?: 'list' | 'sidebyside' | 'grid';
  limit?: number;
}

const DepartViewDescriptionClasses = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",

    backgroundColor: tokens.colorBrandBackground2,
    border: tokens.borderRadiusSmall,
    padding: tokens.spacingHorizontalL,

    '& > *': {
      marginBlock: "0"
    },

    "& > * + *": {
      marginBlockStart: tokens.spacingVerticalL,
    }
  }
});

const DepartViewListOfPeopleClasses = makeStyles({
  root: {
    margin: 0,
    padding: 0,

    flexWrap: 'wrap',
    display: 'grid',

    "& > li": {
      listStyle: "none"
    }
  },

  list: {
    "& > *+*": {
      borderTop: `solid 1px ${tokens.colorNeutralBackground4}`
    }
  },

  grid: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
    gap: tokens.spacingHorizontalL,

    "& > li": {
      border: `solid  1px ${tokens.colorNeutralBackground6}`,
      borderRadius: tokens.borderRadiusSmall,
      listStyle: "none"
    }
  },

  sidebyside: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))'
  },
});

const DepartViewClasses = makeStyles({
  root: {
    "--space": tokens.spacingVerticalXXS,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    "& > *": {
      marginBlock: 0
    },

    "& > * + *": {
      marginBlockStart: tokens.spacingHorizontalL
    }
  }
});

const DepartViewPeopleClasses = makeStyles({
  root: {
    padding: tokens.spacingHorizontalM,
    color: tokens.colorNeutralForeground3
  },

  persona: {
    display: "flex",
    flexDirection: "row",
    gap: tokens.spacingHorizontalM,
  },

  info: {
    alignContent: "center",
    display: "grid",
    gap: 0,
  },

  xtraInfo: {
    display: "grid",
    gap: 0,
    marginTop: tokens.spacingVerticalS,

    "& > *": {
      display: "flex",
      alignItems: "center"
    }
  },

  name: {
    color: tokens.colorNeutralForeground1
  },

  ext: {
    color: tokens.colorNeutralForeground4
  },

  jobtitle: {
    color: tokens.colorNeutralForeground2
  },

  icon: {
    marginRight: tokens.spacingHorizontalXS
  },

  jobDescription: {
    marginTop: tokens.spacingVerticalS
  }
});

export const DepartmentView = ({
  layout = 'list'
}: DepartmentViewProps) => {
  const classes = DepartViewClasses();

  return (
    <div className={classes.root}>

      <div className="ec-dv-stack">
        <Subtitle1>HR.A.4</Subtitle1>
        <Subtitle2>Corporate Internal Communication</Subtitle2>
      </div>

      <DepartViewDescription></DepartViewDescription>
      <DepartViewListOfPeople layout={layout}></DepartViewListOfPeople>
    </div>
  );
};

function DepartViewDescription() {
  const classes = DepartViewDescriptionClasses();
  return (
    <div className={classes.root}>
      <p>Elit est qui id cillum culpa nulla culpa. Amet eiusmod minim qui labore cupidatat mollit proident consequat dolore incididunt ad elit. Est sint amet cupidatat elit. Eu magna nisi ad incididunt. Nulla eiusmod Lorem reprehenderit officia mollit enim nulla tempor fugiat velit.</p>

      <p>Exercitation nisi proident ipsum laborum do culpa laborum irure consequat aute. Irure deserunt do irure dolore consequat deserunt ad non sit aliqua occaecat. Incididunt quis eu est mollit excepteur consequat incididunt aute reprehenderit duis commodo. Ut nisi consequat nulla aute culpa eiusmod. <Link inline>...read more</Link></p>
    </div>
  )
}

function DepartViewListOfPeople({ layout }: DepartmentViewProps) {
  const classes = DepartViewListOfPeopleClasses();
  const classNames = mergeClasses(
    classes.root,
    layout === 'list' && classes.list,
    layout === 'sidebyside' && classes.sidebyside,
    layout === 'grid' && classes.grid
  );
  return (
    <ul
      className={classNames}
    >
      {Array.from({ length: 10 }).map(() => {

        return (
          <li>
            <DepartViewPeople />
          </li>
        );
      })}
    </ul>
  )
}

export interface DepartViewPeopleProps {
  name?: string,
  ecJobTitle?: string,
  email?: string,
  tel?: string,
  office?: string,
  jobDescription?: string
}

function DepartViewPeople({
  name = 'Jane DOE',
  ecJobTitle = 'Secretary - to the Director',
  email = 'Jane.DOE@ec.europa.eu',
  tel = '+32 652 87 12',
  office = 'BRU-L107 12/DCS',
  jobDescription = 'Ad laborum id non occaecat anim tempor incididunt fugiat. Consectetur dolor duis sunt irure veniam esse ad proident cupidatat labore esse ad. Nostrud mollit aliqua aliquip in ullamco elit. Consequat culpa reprehenderit cillum aliquip officia officia cillum velit.'
}: DepartViewPeopleProps) {
  const classes = DepartViewPeopleClasses();
  return (
    <div className={classes.root}>
      <div className={classes.persona}>
        <Avatar
          name="Pol"
          size={72}
          image={{
            src: TestImages.personaFemale
          }}
        />
        <div className={classes.info}>
          <div><Text size={400} weight="medium" className={classes.name}>{name}</Text> <Text size={200} weight="regular" className={classes.ext}>(*)</Text></div>
          <Text size={300} weight="medium" className={classes.jobtitle}>{ecJobTitle}</Text>
        </div>
      </div>
      <div className={classes.xtraInfo}>
        <Text><MailRegular className={classes.icon} /> {email}</Text>
        <Text><CallRegular className={classes.icon} />{tel}</Text>
        <Text><LocationRegular className={classes.icon} />{office}</Text>
        <Text className={classes.jobDescription}>{jobDescription}</Text>
      </div>
    </div>
  )
}