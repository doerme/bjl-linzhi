{{each list as value}}
<p>
    {{if value.type == 1}}
    压庄：
    {{else if value.type == 2}}
    压闲：
    {{else if value.type == 3}}
    压庄对：
    {{else if value.type == 4}}
    压和：
    {{else if value.type == 5}}
    压闲对：
    {{/if}}
    {{value.value}}金币
</p>
{{/each}}
<p class="tr">合计<span class="yellow">{{totalNum}}</span>金币</p>