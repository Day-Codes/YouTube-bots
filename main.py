@client.command(pass_context = True)
async def weeb(ctx):
    weeb = ['https://tenor.com/view/neko-cat-ears-girl-anime-gif-12142150','https://tenor.com/view/anime-gif-11006663','https://tenor.com/view/anime-girl-cute-gif-15584894','https://tenor.com/view/cute-anime-dancing-silly-happy-excited-gif-13462237','https://tenor.com/view/smug-anime-face-gif-6194051','https://tenor.com/view/ara-anime-eyebrow-up-gif-15721758','https://tenor.com/view/ara-ara-aki-mukirose-aki-rosenthal-hololive-gif-19641840','https://tenor.com/view/social-l-ife-anime-school-me-gif-11021144']
        
   
    await ctx.send(random.choice(weeb))
