var searchBar = React.createClass({
    saveText: function(text){
        console.log(text);
    },
    render: function(){
        var self = this;
        return (
            <TextInput style={styles.input}
                onChangeText={(text) => self.saveText(text)}
                placeholder="Search Tweets" placeholderColor={"#FFF"}></TextInput>
        )
    }
});
var styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        width: 220,
        height: 32,
        marginTop: 6,
        paddingLeft: 10,
        color: '#000',
        borderRadius: 4
    }
});

module.exports = searchBar