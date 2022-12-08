<script setup>
const { slug } = useRoute().params

const resolveRelations = ['popular-articles.articles']

const story = await useAsyncStoryblok(
  slug ? slug.join('/') : 'home',
  {
    version: 'draft',
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
)
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>