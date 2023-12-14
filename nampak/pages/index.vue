<template>
  <div class="flex justify-center items-center min-h-screen">
    <NuxtLink to="/status">status</NuxtLink>
    <form 
        @submit.prevent="DaftarLomba"
        class="flex flex-col gap-6 bg-[#a39193] lg:w-[30%] max-h-90 w-[50%] py-10 px-10 rounded-2xl"
        >
        <div class="text-center text-4xl font-semibold">
            Pendaftaran Lomba
        </div>
        <div class="flex flex-col border-b border-[#2e2e2e]">
            <label for="" class="text-xl">Nama</label>
            <input
            type="text"
            v-model="name"
            class="border-none focus:outline-none bg-transparent"
            required
            />
        </div>
        <div class="flex flex-col border-b border-[#2e2e2e]">
            <label for="" class="text-xl">Email</label>
            <input
            type="email"
            v-model="email"
            class="border-none focus:outline-none bg-transparent"
            required
            />
        </div>
        <div class="flex flex-col border-b border-[#2e2e2e]">
            <label for="" class="text-xl">Asal Sekolah</label>
            <input
            type="text"
            v-model="asal_sekolah"
            class="border-none focus:outline-none bg-transparent"
            required
            />
        </div>
        <div class="flex flex-col border-b border-[#2e2e2e]">
            <label for="" class="text-xl">Tanggal Pendaftaran</label>
            <input
            type="date"
            v-model="tanggal_pendaftaran"
            class="border-none focus:outline-none bg-transparent"
            required
            />
        </div>
        <button
            type="submit"
            class="bg-[#f8f8f8] py-2 rounded-xl font-bold"
        >
            Submit
        </button>

        </form>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
const router = useRouter();

const name = ref("");
const email = ref("");
const asal_sekolah= ref("");
const tanggal_pendaftaran = ref("");

const DaftarLomba = async()=>{
  const res = await fetch("http://localhost:5000/api/lomba",{
    method: "POST",
    credentials: "include",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      asal_sekolah: asal_sekolah.value,
      tanggal_pendaftaran: tanggal_pendaftaran.value
  })
});

const json = await res.json();
  console.log(json);
  if (res.ok) {
  alert("Berhasil Mendaftarkan Lomba!");
  router.push("/after");
  }else{
    alert("Gagal Mendaftarkan Lomba!\nEmail atau Nama Sudah Terdaftar.");
  };
};
</script>
