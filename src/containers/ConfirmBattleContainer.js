var React = require("react");
var ConfirmBattle = require("../components/ConfirmBattle");
require('')

var ConfirmBattleContainer = React.createClass( {
    getInitialState: function() {
        return {
            isloading: true,
            playerInfo; []
            
        }
    }
    
    render: function() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playerInfo}
            />
        )
    }
    
})

module.exports = ConfirmBattleContainer;