<!--begin::Aside-->
<div id="kt_aside" class="aside pb-5 pt-5 pt-lg-0" data-kt-drawer="true" data-kt-drawer-name="aside"
	data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
	data-kt-drawer-width="{default:'80px', '300px': '100px'}" data-kt-drawer-direction="start"
	data-kt-drawer-toggle="#kt_aside_mobile_toggle">
	<!--begin::Brand-->
	<div class="aside-logo py-8" id="kt_aside_logo">
		<!--begin::Logo-->
		<a href="?page=index" class="d-flex align-items-center">
			<img alt="Logo" src="assets/media/logos/favicon.png" class="h-45px logo" />
		</a>
		<!--end::Logo-->
	</div>
	<!--end::Brand-->
	<!--begin::Aside menu-->
	<div class="aside-menu flex-column-fluid" id="kt_aside_menu">
		
		@include('ChatWhatsapp/aside/_menuWA')

	</div>
	<!--end::Aside menu-->
	<!--begin::Footer-->
	<div class="aside-footer flex-column-auto" id="kt_aside_footer">
		<!--begin::Menu-->
		<div class="d-flex justify-content-center">
			<button type="button" class="btn btm-sm btn-icon btn-active-color-primary" data-kt-menu-trigger="click"
				data-kt-menu-overflow="true" data-kt-menu-placement="top-start" data-bs-toggle="tooltip"
				data-bs-placement="right" data-bs-dismiss="click" title="Quick actions">
				<!--begin::Svg Icon | path: icons/duotune/general/gen008.svg-->
				<span class="svg-icon svg-icon-1">
					<img src="assets/media/avatars/blank.png" class="rounded" alt="" width="48">
				</span>
				<!--end::Svg Icon-->
			</button>								
			<!--begin::Menu-->
			<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
				<!--begin::Menu item-->
				<div class="menu-item px-3">
					<div class="menu-content d-flex align-items-center px-3">
						<!--begin::Avatar-->
						<div class="symbol symbol-50px me-5">
							<img alt="Logo" src="assets/media/avatars/150-26.jpg" />
						</div>
						<!--end::Avatar-->
						<!--begin::Username-->
						<div class="d-flex flex-column">
							<div class="fw-bolder d-flex align-items-center fs-5">Max Smith
							<span class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
							<a href="#" class="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
						</div>
						<!--end::Username-->
					</div>
				</div>
				<!--end::Menu item-->
				<!--begin::Menu separator-->
				<div class="separator my-2"></div>
				<!--end::Menu separator-->
				<!--begin::Menu item-->
				<div class="menu-item px-5">
					<a href="#" class="menu-link px-5">My Profile</a>
				</div>
				<!--end::Menu item-->
				<!--begin::Menu separator-->
				<div class="separator my-2"></div>
				<!--end::Menu separator-->
				<!--begin::Menu item-->
				<div class="menu-item px-5">
					<a href="?page=authentication/flows/basic/sign-in" class="menu-link px-5">Sign Out</a>
				</div>
				<!--end::Menu item-->
			</div>
			<!--end::Menu-->
		</div>
	</div>
	<!--end::Footer-->
</div>
<!--end::Aside-->