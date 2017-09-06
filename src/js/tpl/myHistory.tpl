{{if list.length == 0}}
<p class="no-record">没有任何下注记录哦！</p> 
{{/if}}
{{each list as value index}}
<li>
    <div>{{value.issue}}期 <span class="fr">{{value.time}}</span> </div>
    <div>
        {{each value.payList as item xindex}}
        {{if item > 0}}
            <p>
                {{if xindex == 1}}
                压庄：
                {{else if xindex == 2}}
                压闲：
                {{else if xindex == 3}}
                压庄对：
                {{else if xindex == 4}}
                压和：
                {{else if xindex == 5}}
                压闲对：                 
                {{/if}}
                {{item}}金币
            </p>
        {{/if}}
        {{/each}}
    </div>
    <div>开奖 ：
        庄：{{value.zhuan}} &nbsp;&nbsp;
        闲: {{value.xian}}
        {{if value.winGold >0 }}
        <span class="fr lotted">中{{value.winGold}}钻石</span>
         {{else}} 
        <span class="fr not">未中奖</span>         
          {{/if}}
    </div>
</li>
{{/each}}