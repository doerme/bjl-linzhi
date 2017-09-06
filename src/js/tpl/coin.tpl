 {{each list as value index}}
 {{if value.winGold > 0}}
 {{if index == 0}}
 <div class="coin-3">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
 {{else if index <3}}
 <div class="coin-{{index}}">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
{{else }}
<div class="coin-{{index +1}}">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
{{/if}}
{{/if}}
{{/each}}
