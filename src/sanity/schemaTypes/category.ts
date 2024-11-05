import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Category Image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          imageUrl: "assets.url",
          title: "caption",
        },
      },
    }),
  ],
});
