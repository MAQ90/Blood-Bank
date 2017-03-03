import * as React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as MUI from 'material-ui';
import {Link} from 'react-router';
import Help from 'material-ui/svg-icons/action/help';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import {blue50} from 'material-ui/styles/colors';
import AppTheme from '../../AppTheme';

export class Login extends React.Component<any,any>{
    render(){
        return(
            <MuiThemeProvider muiTheme={AppTheme}>
              <div>
                <div>
                  <MUI.Paper zDepth={5}>
                    <form>
                      <MUI.TextField hintText="e-Mail" floatingLabelText="e-Mail" fullWidth={true}/>
                      <MUI.TextField hintText="PassWord" floatingLabelText="PassWoed" fullWidth={true} type="password"/>
                    </form>
                  <MUI.Paper>
                </div>
              </div>
            </MuiThemeProvider>
        )
    }
}