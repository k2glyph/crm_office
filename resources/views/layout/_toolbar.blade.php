<!--begin::Toolbar-->
<div class="toolbar py-2" id="kt_toolbar">
	<!--begin::Container-->
	<div id="kt_toolbar_container" class="container-fluid d-flex align-items-center">
		<!--begin::Page title-->
		<div class="flex-grow-1 flex-shrink-0 me-5">

			@include('layout/_page-title')

		</div>
		<!--end::Page title-->
		<!--begin::Action group-->
		<div class="d-flex align-items-center flex-wrap">
			<!--begin::Wrapper-->
			{{-- <div class="flex-shrink-0 me-2">
				<ul class="nav">
					<li class="nav-item">
						<a class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light active fw-bold fs-7 px-4 me-1"
							data-bs-toggle="tab" href="#">Day2</a>
					</li>
					<li class="nav-item">
						<a class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-bold fs-7 px-4 me-1"
							data-bs-toggle="tab" href="">Week</a>
					</li>
					<li class="nav-item">
						<a class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-bold fs-7 px-4"
							data-bs-toggle="tab" href="#">Year</a>
					</li>
				</ul>
			</div> --}}
			<h5 class="my-auto me-3 fw-normal">{{$day}}</h5>
			<!--end::Wrapper-->

		</div>
		<!--end::Action group-->
	</div>
	<!--end::Container-->
</div>
<!--end::Toolbar-->
