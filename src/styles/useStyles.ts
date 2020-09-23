import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      margin: '4em 1em',
    },
  })
);

export default useStyles;
