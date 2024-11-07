export function merge(nums1: number[], m: number, nums2: number[], n: number): void {

  m--
  n--

  for (let i = nums1.length - 1; i >= 0; i--) {

    if (n < 0) {
      // because nums1 is already sorted
      break
    }

    if (m < 0) {
      nums1[i] = nums2[n]
      n--
      continue
    }
    if (nums1[m] <= nums2[n]) {
      // place greatest at end
      nums1[i] = nums2[n]
      n--
    } else if (nums1[m] > nums2[n]) {
      nums1[i] = nums1[m]
      nums1[m] = 0
      m--
    }
  }
}
