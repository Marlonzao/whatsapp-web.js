'use strict';

const Constants = require('./src/util/Constants');

module.exports = {
    Client: require('./src/Client'),
    
    version: require('./package.json').version,

    // Structures
    Chat: require('./src/structures/Chat'),
    PrivateChat: require('./src/structures/PrivateChat'),
    GroupChat: require('./src/structures/GroupChat'),
    Message: require('./src/structures/Message'),
    Contact: require('./src/structures/Contact'),
    PrivateContact: require('./src/structures/PrivateContact'),
    BusinessContact: require('./src/structures/BusinessContact'),
    ClientInfo: require('./src/structures/ClientInfo'),
    Location: require('./src/structures/Location'),
    ProductMetadata: require('./src/structures/ProductMetadata'),
    List: require('./src/structures/List'),
    Buttons: require('./src/structures/Buttons'),
    ...Constants
};
