let lt = 0;

function response(r, msg, sender, g, replier, d, shared)
{
    if(msg == "안녕하세요")
    {
        var now = Date.now();
        var deltaTime = now - lt;
        if(deltaTime > 1000)
        {
            replier.reply(sender + "님 안녕하세요!");
            lt = now;
        }
        return true;
    }
}

return response;