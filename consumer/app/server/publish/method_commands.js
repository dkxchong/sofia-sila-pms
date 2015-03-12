Meteor.publish("method_commands", function(methodId) {
	return MethodCommands.find({methodId:methodId,ownerId:this.userId}, {transform:function(doc) { var command = CommonCommandSet.findOne({_id: doc.commandId }); if(command) doc.commandName = command.name; return doc; },sort:{createdAt:1}});
});

Meteor.publish("method_commands_empty", function() {
	return MethodCommands.find({_id:null,ownerId:this.userId}, {});
});

Meteor.publish("method_command", function(commandId) {
	return MethodCommands.find({_id:commandId,ownerId:this.userId}, {});
});
