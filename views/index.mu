<html>
    <head>
        <title>{{title}}</title>
        <link rel="stylesheet" href="/css/style.css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script type="text/javascript">window.sq = {};</script>
    </head>    
    <body>

        <div class="main">
            <div id="players">
                {{#players}}
                    <div class="player">
                        <div class="player-color" style="background-color:{{color}}"></div>
                        <strong>{{name}}</strong>
                    </div>
                {{/players}}


            </div>

             <div id="timer"><div>15</div></div>

            <div id="game-board">
                {{#board}}
                    <div class="letter">{{letter}}</div>
                {{/board}}
            </div>
            <div id="temp-input">
                
            </div>
            <div id="keyboard">
                <form id="keyboard-input" >
                    <input type="text" placeholder="Play a word" />
                </form>
            </div>
        </div>
        <script src="/js/main.js"></script>
    </body>
</html>