<template>
    <v-container class="bg-[#263537] text-white h-screen flex justify-center align-center">
        <div class="flex flex-1 flex-col max-w-80 space-y-3">
            <label for="email">Email</label>
            <input class="bg-[#EBF8F8] rounded-lg p-2 text-[#263537]" id="email" name="email" type="email"
                placeholder="example@example.com">
            <label for="password">Password</label>
            <input class="bg-[#EBF8F8] rounded-lg p-2 text-[#263537]" id="password" name="password" type="password"
                placeholder="*********">
            <div class="flex flex-row justify-between mt-6">
                <span>Don't have an account?</span>
                <div class="flex flex-col ">
                    <button @click="handleLogin" id="submitButton"
                        class="bg-[#93DDE0] px-4 py-2 rounded-lg text-[#263537]">Sing In</button>
                    <span class="mt-2">Forgot password?</span>
                </div>
            </div>
        </div>
    </v-container>
</template>
<script setup>

const handleLogin = () => {
    console.log('login')
}

</script>

<style scoped></style>