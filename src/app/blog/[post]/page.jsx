const SingPost = async ({ params }) => {
  async function fetchData(id) {
    const res = await fetch(
      `https://basic-blog.teamrabbil.com/api/post-details/${id}`
    );
    const newData = await res.json();
    return newData;
  }
  const data = await fetchData(params.post);
  if (!data) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={data.postDetails.img}
          alt={data.postDetails.title}
          className="w-full h-60 sm:h-96 bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
          <div className="space-y-2">
            <h2 className="inline-block text-2xl font-semibold sm:text-3xl text-gray-100">
              {data.postDetails.title}
            </h2>
            <p className="text-xs text-gray-400">
              By
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline"
              >
                Leroy Jenkins
              </a>
            </p>
          </div>
          <div className="text-gray-100">
            <p>{data.postDetails.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingPost;
