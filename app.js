'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

   
   
   server.route({
    method: 'POST',
    path: '/users',
    handler: function (request, h) {

        const payload = request.payload;

        return `very veryFirst project in Hapi js Client name :  ${payload.clientname}! , Date of meeting : ${payload.dateofmeeting}, Message : ${payload.message}`;
    }
     });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
