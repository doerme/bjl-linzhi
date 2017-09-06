{{each list as value index}}
<li>
    <span class="fl">{{value.id}}期</span>
    <span class="item-{{value.num1}}"></span>
    <span class="item-{{value.num2}}"></span>
    <span class="item-{{value.num3}}"></span>
    <span class="fr">{{value.winNum}}点</span>
    <span class="fr">{{value.result}}</span>    
</li>
{{/each}}