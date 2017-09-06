{{each list as value xindex}}
{{if value > 0}}
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
    {{value}}金币
</p>
{{/if}}
{{/each}}
<p class="tr">合计<span class="yellow">{{totalNum}}</span>金币</p>