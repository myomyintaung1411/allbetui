<template>
    <div class="flex flex-col items-center mt-10">
      <div class="mb-5">
        <label for="files" class="block text-sm font-medium text-gray-700">Choose files to upload</label>
        <input id="files" type="file" ref="fileInput" multiple @change="handleFilesChange" :disabled="isUploading">
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="(file, index) in files" :key="file.name" class="relative m-3">
          <img :src="file.previewUrl" class="w-32 h-32 object-cover">
          <div class="absolute top-0 right-0">
            <button @click="removeFile(index)" class="bg-red-500 text-white px-2 py-1 rounded-full focus:outline-none">&times;</button>
          </div>
          <div class="text-center text-sm mt-2">{{ file.name }}</div>
        </div>
      </div>
      <div v-if="errorMessage" class="mt-2 text-red-500">{{ errorMessage }}</div>
      <button @click="uploadFiles" :disabled="isUploading || files.length === 0" class="mt-5 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none">
        <span v-if="isUploading">Uploading...</span>
        <span v-else>Upload</span>
      </button>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref, reactive } from 'vue';
  // import { useToast } from 'vue-toastification';
  
  const files = reactive([]);
  const fileInput = ref(null);
  const isUploading = ref(false);
  const errorMessage = ref(null);
  // const toast = useToast();
  
  const handleFilesChange = () => {
    errorMessage.value = null;
    for (let i = 0; i < fileInput.value.files.length; i++) {
      const file = fileInput.value.files[i];
      if (file.size > 10485760) { // 10 MB
        errorMessage.value = 'File size must be less than 10 MB.';
        break;
      }
      const reader = new FileReader();
      reader.onload = () => {
        files.push({
          name: file.name,
          size: file.size,
          type: file.type,
          previewUrl: reader.result,
          file: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeFile = (index) => {
    files.splice(index, 1);
  };
  
  const uploadFiles = async () => {
    isUploading.value = true;
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files[]', file.file);
    });
    try {
      const response = await axios.post('/upload', formData);
     // toast.success('Files uploaded successfully.');
      files.splice(0, files.length);
    } catch (error) {
     // toast.error('Failed to upload files.');
    } finally {
      isUploading.value = false;
    }
  };
  </script>
  
  <style>
  input[type="file"] {
    display: none;
  }
  </style>
  