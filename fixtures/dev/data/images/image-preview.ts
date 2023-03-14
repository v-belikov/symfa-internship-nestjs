import { DeepPartial } from 'typeorm';

import { ImagePreview } from '@entities/images';

import { generateImagePreview } from './models';

export const IMAGE_PREVIEW_FIXTURES: DeepPartial<ImagePreview>[] = [
  ...generateImagePreview(
    ['437416cd-9a14-420f-a8e1-b3dd4b4688f7', '9dcb3f46-cda6-4bf4-aeb1-be8561d9da1d'],
    876661122392077,
    '81582a51-5af2-4811-8584-7065a1b54400',
  ),
  ...generateImagePreview(
    ['43ebe692-af67-42f5-9435-feea36c7cd37', '08ccaf55-ce4b-4272-b794-7b7c66de1a63'],
    5619496040738316,
    'd25b3a3a-3470-4869-af85-962a989daa32',
  ),
  ...generateImagePreview(
    ['b2dc1dc5-97c8-417c-9c0a-cc72f401722e', '2d1dcc8c-e9da-44a4-bf3d-f5bec3140e56'],
    6090484789343891,
    '9140080a-3fe4-4496-9ec1-f1375870f109',
  ),
  ...generateImagePreview(
    ['922cfd9f-6cfc-4cb8-8cce-3a3da778eca6', '816f631b-f314-4802-a7f4-085597d051d3'],
    8552515751438644,
    'c7cee40d-98d7-423e-9523-f3ea02a69582',
  ),
  ...generateImagePreview(
    ['5602332c-2149-4959-a1ab-3a721f437e8b', '7a2b47b5-6464-452f-bb45-18f917a556cf'],
    9197907543445676,
    '59294dc0-73b8-4060-b4e0-477baa618530',
  ),
  ...generateImagePreview(
    ['e372ad9e-43ca-4e08-aca1-d6acdabe8529', 'aa069b3c-4af1-47ca-99cb-f51351038f3f'],
    10547961582846888,
    '35e61a53-4a5c-4f9c-b561-be80f2d7afec',
  ),
  ...generateImagePreview(
    ['5ee8ed97-f5c3-481f-922f-d4b4dcb60317', '6342df65-cab3-4e60-8780-b3abd0bc184a'],
    10686354557628304,
    'a785dbc7-becb-494c-b13c-ed2bfd4f34f4',
  ),
  ...generateImagePreview(
    ['2f8c8091-3de6-4a9b-8d53-de6232dca69c', '2764da49-d01e-4b16-9eb3-cb990b096be9'],
    11033926921508488,
    '941a1e93-2d29-43f9-a33f-b78ef83a9fb7',
  ),
  ...generateImagePreview(
    ['ad92b5fd-e6d9-477a-8956-6bb6c6cf5ca6', '5718b28e-ea89-4693-86fa-7718d9f63743'],
    11600983276356164,
    '42e30d43-b51f-47e8-ab20-c3aa9761e48a',
  ),
  ...generateImagePreview(
    ['e1dd673b-cddd-4559-b6df-45f9397cc435', 'e432deff-9604-461e-a351-a6c17b18c50a'],
    11854078013954528,
    '761611eb-14b0-4964-ac92-4d4e742d12c4',
  ),
  ...generateImagePreview(
    ['70b7e219-83a4-43a4-8c87-1f7991f1deff', 'a3ff4aef-169f-4d3e-9d3a-94d5e28d763f'],
    12064273040195392,
    'be42b8cd-c987-4cac-9ffe-419f17eb67b0',
  ),
  ...generateImagePreview(
    ['5b49ac1f-4eef-4673-8aef-58d8612b7726', '0cc06033-70b8-43ea-840f-3d7ca9a300bb'],
    18532669286405344,
    '188984d8-ef4e-4517-b817-9e471a049f13',
  ),
  ...generateImagePreview(
    ['8a1e0361-4679-4160-a6b0-c24cd5b0c07f', '104a7e3a-e402-4e61-b404-a48e7fa2b4e2'],
    18644119330491310,
    'e4e0e2eb-6a30-4eb2-a93f-d8c829e4a952',
  ),
  ...generateImagePreview(
    ['c78af209-df64-4157-87b1-6ffe594d7b43', '9a020324-8f4b-4c62-a3b6-ff222a607014'],
    27250082398145996,
    'ed1debc4-fdef-4cd7-b23e-4921b611539d',
  ),
  ...generateImagePreview(
    ['7abcead3-a482-4e9a-adf5-15ba748c2ae4', '99096a4e-ad3b-4523-8c11-3ba5290e50b6'],
    39876704341265610,
    '53f0234c-7862-4e7e-bfc6-9971747b0df8',
  ),
  ...generateImagePreview(
    ['59676446-d929-4fe4-a7fa-cb82d1e878f3', '50991f21-e88f-4c35-81fb-23f2bf02212f'],
    51498472915966370,
    'ea61381c-f7e3-4717-8402-0e74bba72508',
  ),
];
