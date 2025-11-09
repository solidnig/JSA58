const fetchAPI = async () => {
  const req = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=9b7c3ede447b14c5e0e9d33a137ddac9"
  );
  return await req.json();
};

// sự kiện được kích hoạt khi DOM render thành công
// DOM: là những phần tử có trong trang được render hết thì mới chạy câu lệnh ở dưới
document.addEventListener("DOMContentLoaded", async () => {
  console.log("đã load xong content ở DOM");
  const res = await fetchAPI();
  console.log(res);

  const movies = document.querySelector(".movies");
  for (let i = 0; i < res.results.length; i++) {
    const html = ` <div class="movie swiper-slide">
                        <img src="https://image.tmdb.org/t/p/w200${res.results[i].poster_path}" alt="" />
                        <p>${res.results[i].title}</p>
                    </div>`;
    movies.innerHTML += html;
  }
});
