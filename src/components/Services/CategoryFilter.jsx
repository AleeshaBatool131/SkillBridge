const categories = [
  "All",
  "Web Development",
  "Graphic Design",
  "Writing",
  "Marketing",
  "Video Editing",
  "Programming",
];

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="filters">

      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() =>
            setSelectedCategory(category)
          }
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;