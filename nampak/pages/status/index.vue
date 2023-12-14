<template class="flex justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center items-center min-h-screen ">
      <div class="bg-[#a39193] py-5 px-5">
        <h2 class="text-2xl mb-4 font-weight-bold ">Cek Status Registrasi</h2>
      <form @submit.prevent="checkStatus">
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="form-control bg-transparent"
          />
        </div>
        <div class="flex justify-center">
        <button type="submit" class="btn btn-primary">
          Check
        </button>
    </div>
      </form>
  
      <div v-if="status !== null" class="mt-4">
        <h3 class="text-lg font-weight-bold">Status Pendaftaran:</h3>
        <p class="mt-2">{{ status }}</p>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        status: null,
      };
    },
    methods: {
      async checkStatus() {
        try {
          const apiUrl = `http://localhost:5000/api/lomba?email=${this.email}`;
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers needed for authorization
            },
            credentials: "include", // Include credentials if needed
          });
  
          if (response.ok) {
            const responseData = await response.json();
            console.log("API Response:", responseData);
  
            if (responseData.docs && responseData.docs.length > 0) {
              const userDocument = responseData.docs.find(
                (doc) => doc.email === this.email
              );
  
              if (userDocument) {
                this.status = userDocument.status;
              } else {
                console.error("Error: User not found.");
              }
            } else {
              console.error("Error: No documents found.");
            }
          } else {
            console.error(
              "Failed to fetch status. Status code:",
              response.status
            );
          }
        } catch (error) {
          console.error("Error:", error);
        }
      },
    },
  };
  </script>
  