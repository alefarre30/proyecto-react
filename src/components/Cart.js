import { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
      height: 300,
      flexGrow: 1,
      minWidth: 300,
      transform: 'translateZ(0)',
      '@media all and (-ms-high-contrast: none)': {
        display: 'none',
      },
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    paper: {
      width: 800,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2),
      borderRadius: '10px'
    },
}));

const Cart = ({show, onHide, cart, deleteProductoOfCart, deleteAllProducts}) => {

    const classes = useStyles();
    const rootRef = useRef(null);

    return (<Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={show}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <div className={classes.paper}>
          <h2 class="modal-title">List Products</h2>
          
          {(cart.length !== 0)?(
            cart.map(item => (
              <>
                <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + "/products/" + item.image} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              $ {item.priceNew}
                            </Typography>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon onClick={() => deleteProductoOfCart(item.id)} />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
              </List>
              <Divider />
            </>
            ))
          ):<p class="alert alert-danger">There are no products in the cart</p>}
          

          <div className="modal-actions">
            <a href="javascript:void(0);" className="btn btn-orange mr-5" onClick={onHide}>Close</a>
            <a href="javascript:void(0);" className="btn btn-danger" onClick={deleteAllProducts}>Remove All</a>
          </div>
        </div>
      </Modal>);
}

export default Cart;