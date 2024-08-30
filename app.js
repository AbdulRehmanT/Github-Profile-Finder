const resultContainer = document.getElementById("result-container");
const searchBtn = document.getElementById("search-button");

searchBtn.addEventListener("click", async () => {
  const userName = document.getElementById("search-input").value.trim();

  const url = `https://api.github.com/users/${userName}`;

  try {
    const response = await axios(url);

    const data = response.data;

    console.log(response);

    resultContainer.innerHTML = `
            <div class="border border-indigo-500 rounded justify-center max-w-1/2 h-fit mx-2 w-fit mt-4 p-4">
                <div>
                    <img src="${data.avatar_url}" alt="${data.login}'s avatar" class="w-16 h-16 border border-indigo-500 rounded-full">
                    <div>
                        <h2>${data.name || data.login}</h2>
                        <p class="text-gray-600">${data.bio || "No bio available"}</p>
                    </div>
                </div>
                <div>
                    <p class="text-gray-500">Location: ${data.location || "N/A"}</p>
                    <p class="text-gray-500">Public Repos: ${data.public_repos}</p>
                    <p class="text-gray-500">Followers: ${data.followers}</p>
                    <p class="text-gray-500">Following: ${data.following}</p>
                    <a href="${data.html_url}" target="_blank" class="text-indigo-500 hover:underline">View Profile on GitHub</a>
                </div>
            </div>`;
  } catch (error) {
    resultContainer.innerHTML = `<p class="text-red-500">Failed to fetch GitHub profile: ${error.message}</p>`;
  }
});
