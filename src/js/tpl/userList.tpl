{{each list as value index}}
<div class="js-user-item">
    <p><img src="{{value.avatar}}" /></p>
    {{if index != 2}}
    <p>{{value.nickname}}</p>
    {{/if}}
    <span ></span>
</div>
{{/each}}