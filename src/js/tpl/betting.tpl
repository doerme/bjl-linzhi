<!-- 他人下注-->

<div class="betting-wrapper">
    {{each otherList as value index}}
        {{if value[1].length}}
        {{each value as item }}
            {{if item > 0}}
            <div class="jb-item " data-num="{{value[1]}}"></div>
            {{/if}}
        {{/each}}
        {{/if}}
    {{/each}}
</div>

<div class="betting-wrapper">
    {{each otherList as value index}}
        {{if value[2].length}}
        {{each value as item }}
            {{if item > 0}}
            <div class="jb-item " data-num="{{value[2]}}"></div>
            {{/if}}
        {{/each}}
        {{/if}}
    {{/each}}
</div>

<div class="betting-wrapper">
    {{each otherList as value index}}
        {{if value[3].length}}
        {{each value as item }}
            {{if item > 0}}
            <div class="jb-item " data-num="{{value[3]}}"></div>
            {{/if}}
        {{/each}}
        {{/if}}
    {{/each}}
</div>

<div class="betting-wrapper">
    {{each otherList as value index}}
        {{if value[4].length}}
        {{each value as item }}
            {{if item > 0}}
            <div class="jb-item " data-num="{{value[4]}}"></div>
            {{/if}}
        {{/each}}
        {{/if}}
    {{/each}}
</div>

<div class="betting-wrapper">
    {{each otherList as value index}}
        {{if value[5].length}}
        {{each value as item }}
            {{if item > 0}}
            <div class="jb-item " data-num="{{value[5]}}"></div>
            {{/if}}
        {{/each}}
        {{/if}}
    {{/each}}
</div>
<!--下注的情况-->
<div class="betting-wrapper">
    {{if myList[1].length}}
    {{each myList[1] as value}}
        <div class="jb-item" data-num="{{value}}"></div>
    {{/each}}
    {{/if}}
</div>
<div class="betting-wrapper">
    {{if myList[2].length}}
    {{each myList[2] as value}}
        <div class="jb-item" data-num="{{value}}"></div>
    {{/each}}
    {{/if}}
</div>
<div class="betting-wrapper">
    {{if myList[3].length}}
    {{each myList[3] as value}}
        <div class="jb-item" data-num="{{value}}"></div>
    {{/each}}
    {{/if}}
</div>
<div class="betting-wrapper">
    {{if myList[4].length}}
    {{each myList[4] as value}}
        <div class="jb-item" data-num="{{value}}"></div>
    {{/each}}
    {{/if}}
</div>
<div class="betting-wrapper">
    {{if myList[5].length}}
    {{each myList[5] as value}}
        <div class="jb-item" data-num="{{value}}"></div>
    {{/each}}
    {{/if}}
</div>