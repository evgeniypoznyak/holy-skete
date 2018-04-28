import React, {Component} from 'react';
import classes from './Layout.scss';
import Aux from '../AuxComponent/AuxComponent'

class Layout extends Component {


    render() {

        return (
            <Aux>
                <div>Toolbar</div>
                <div>SideDrawer</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}

export default Layout