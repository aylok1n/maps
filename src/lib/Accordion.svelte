<script>
    import { Accordion, AccordionItem } from "svelte-simple-accordion";
    export let title = "Нет данных";
    export let data = [];

    const getItemIndex = (item, attributeName) => {
        return item.getAttribute(attributeName)
    };

    const handleItemClicked = (event) => {
        const accordion = event.detail.accordion
        const attributeName = event.detail.itemIndexAttributeName
        const itemTitle = event.detail.itemTitle
        const opened = event.detail.opened
        accordion
            .querySelectorAll("[" + attributeName + "]")
            .forEach((element) => {
                const title = element.querySelector(".item-title")
                const icon = title.querySelector(".status")
                const clicked =
                    getItemIndex(itemTitle, attributeName) ===
                    getItemIndex(element, attributeName);
                const toOpen = clicked && opened
                if (toOpen) {
                    title.classList.remove("hide")
                    icon.classList.remove("fa-chevron-down")
                    icon.classList.add("fa-chevron-up")
                } else {
                    title.classList.add("hide")
                    icon.classList.remove("fa-chevron-up")
                    icon.classList.add("fa-chevron-down")
                }
            });
    };
</script>

<Accordion dispatchName="itemClicked" on:itemClicked={handleItemClicked}>
    <div class="item">
        <div>
            <AccordionItem>
                <div slot="title" class="flex-row-left hide">
                    <div class="item-title">
                        <p class="item-title-label">
                            <span class="checkbox-outside">
                                <input class="checkbox" type="checkbox" on:click={e => e.stopPropagation()} />
                            </span>
                            {title}
                        </p>
                        <i class="status fas fa-chevron-down" />
                    </div>
                </div>
                <div slot="content" class="item-content">
                    {#each data as item}
                        <div class="flex-row-left accordion-item">
                            <p>{item.text}</p>
                        </div>
                    {/each}
                </div>
            </AccordionItem>
        </div>
    </div>
</Accordion>

<style>
    .checkbox {
        cursor: pointer;
    }
    .checkbox:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 13px;
        height: 13px;
        border: 1px solid black;
        border-radius: 3px;
        background-color: white;
    }
    .checkbox:checked:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 7px;
        height: 7px;
        border-radius: 1px;
        background-color: red;
    }
    .checkbox-outside {
        position: relative;
    }
    .status {
        display: flex;
        align-items: center;
        color: red;
    }
    .item-title {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }
    p {
        margin: 0;
        padding: 0;
    }
    .accordion-item {
        margin: 5px 0;
        margin-left: 26px;
        padding-left: 6px;
        word-wrap: break-word;
        border-left: 3px solid red;
    }
</style>
