var SearchPage = require('./SearchPage')
var searchBar = require('./searchBar')

var RightCorner = React.createClass({
    goToSearch: function(){
        var self = this;
        var route = {
            naself: "",
            component: SearchPage,
            titleComponent: searchBar
        }
        self.props.toRoute(route)
    },
    render: function(){
        var self = this;
        return (
            <Text style={{marginRight: 20}} onPress={() => self.goToSearch()}>
                Find
            </Text>
        )
    }
});

module.exports = RightCorner