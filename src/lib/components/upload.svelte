<script lang="ts">
    import { fly } from "svelte/transition";

    let files: File[] = [];
    let dropZone: HTMLElement;

    export let delay: number = 0;

    function handleFiles(event: Event) {
        const fileList = (event.target as HTMLInputElement).files || 
                         (event as DragEvent).dataTransfer?.files;
        if (fileList) {
            const newFiles = Array.from(fileList);
            files = [...files, ...newFiles];
        }
    }

    function handleDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    function handleDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        handleFiles(event);
    }

    function removeFile(index: number) {
        files.splice(index, 1);
        files = files.slice();
    }

    function isImage(file: File): boolean {
        return file.type.includes("image");
    }

    function fileURL(file: File): string {
        return URL.createObjectURL(file);
    }
</script>

<div class="upload" bind:this={dropZone} on:dragover={handleDragOver} on:drop={handleDrop} in:fly={{y: 20, duration: 400, delay: delay}}>
    <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        multiple
        class="file-input"
        on:change={handleFiles}
    />

    <p class="text">Lade deinen Bluttest hier hoch. <br/> .jpg, .jpeg, .png, .pdf</p>
    {#if files.length > 0}
        <div class="preview">
            {#each files as file, index}
                <div class="file-preview">
                    {#if isImage(file)}
                        <img src={fileURL(file)} alt="Vorschau" />
                    {:else}
                        <object
                            data={fileURL(file)}
                            type="application/pdf"
                            width="100"
                            height="100"
                        ></object>
                    {/if}
                    <div class="remove-btn" on:click={() => removeFile(index)}>✕</div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .upload {
        height: auto;
        min-height: 300px;
        width: 100%;
        max-width: 900px;
        border: 3px dashed var(--accent);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-color: #f8f8f8;
        position: relative;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .text {
        color: var(--accent);
        pointer-events: none;
    }

    .file-input {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }

    .preview {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
    }

    .file-preview {
        position: relative;
        border: 1px solid #ddd;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
    }

    .file-preview img, .file-preview object {
        display: block;
        max-width: 100px;
        max-height: 100px;
        object-fit: cover;
    }

    .remove-btn {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: #ff5f5f;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
    }
</style>
