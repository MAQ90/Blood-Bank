import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function AppTheme(){
    return getMuiTheme(lightBaseTheme);
}

export default AppTheme();