import {
  DialogTitleProps,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import icons from '../icons/Icons';

const getStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // closeButton: {
  //   padding: theme.spacing(1),
  // },
  title: {
    fontWeight: 500,
  },
  icon: {
    fontSize: '24px',
    color: '#010e29',

    cursor: 'pointer',
  },
}));

interface IProps extends DialogTitleProps {
  onClose?: () => void;
  showCloseIcon?: boolean;
}

const CustomDialogTitle = (props: IProps) => {
  const {
    children,
    classes = { root: '' },
    onClose,
    showCloseIcon = true,
    ...other
  } = props;
  const innerClass = getStyles();

  const ClearIcon = icons.clear;

  return (
    <MuiDialogTitle
      disableTypography
      className={`${innerClass.root} ${classes.root}`}
      {...other}
    >
      <Typography variant="h4" className={innerClass.title}>
        {children}
      </Typography>
      {showCloseIcon && onClose ? (
        <ClearIcon
          data-testid="clear-icon"
          classes={{ root: innerClass.icon }}
          onClick={onClose}
        />
      ) : null}
    </MuiDialogTitle>
  );
};

export default CustomDialogTitle;
