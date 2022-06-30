const { post } = require('request');

exports.getServer = function() {
    let opt = {
        url: 'https://nktzz4aizu-2.algolianet.com/1/indexes/prod_discoverable_guilds/query?x-algolia-agent=Algolia%20for%20JavaScript%20(4.1.0)%3B%20Browser',
        body: '{"query":'+args+',"filters":"auto_removed:false AND approximate_presence_count> 0 AND approximate_member_count>200","optionalFilters":["preferred_locale: pt-BR"],"length":12,"offset":0,"restrictSearchableAttributes":["name","description","keywords","categories.name","categories.name_localizations.pt-BR","primary_category.name","primary_category.name_localizations.pt-BR","vanity_url_code"]}',
        headers: {
            'x-algolia-api-key': 'aca0d7082e4e63af5ba5917d5e96bed0',
            'x-algolia-application-id': 'NKTZZ4AIZU'
        }

    }

    post(opt, (err, res, body) =>
        {
            console.log(body);
        }
    );
}