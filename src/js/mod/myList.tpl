{{if list.length == 0}}
<p class="no-record">没有任何下注记录哦！</p> 
{{/if}}
{{each list as value index}}
<li>
    <div>{{value.id}}期 <span class="fr">{{value.time}}</span> </div>
    <div>
        {{each value.payList as item xindex}}
        {{if item > 0}}
            <p>
                {{if xindex == 1}}
                猜单双：[单]
                {{else if xindex == 2}}
                猜单双：[双] 
                {{else if xindex == 3}}
                猜大小：[小] 
                {{else if xindex == 4}}
                猜大小：[大] 
                {{else if xindex > 4 && xindex <= 10}}
                猜点数：[{{xindex - 4}}] 
                {{else if xindex > 10 && xindex <= 16}}
                猜豹子：[{{xindex - 10}}] 
                {{else if xindex > 16 }}
                猜和值：[{{xindex - 13}}] 
                {{/if}}
                {{item}}金币
            </p>
        {{/if}}
        {{/each}}
    </div>
    <div>开奖 ： {{value.num1}} , {{value.num2}} , {{value.num3}}  
        {{if value.winNum >3 && value.winNum < 18}}
            {{if value.winNum % 2 == 1}}
             单
            {{else}}
             双
            {{/if}}
        {{/if}}
        {{if value.winNum > 3 && value.winNum <= 10}} 
        小
        {{else if value.winNum >10 && value.winNum < 18}}
        大
        {{/if}}
        {{value.winNum}}点 
        {{if value.winGold >0 }}
        <span class="fr lotted">中{{value.winGold}}钻石</span>
         {{else}} 
        <span class="fr not">未中奖</span>         
          {{/if}}
    </div>
</li>
{{/each}}