import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      margin: '0 1em 2em',
    },
  })
);

export default useStyles;
